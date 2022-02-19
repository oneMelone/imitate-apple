use std::io::prelude::*;
use std::net::TcpStream;
use std::net::TcpListener;
use std::fs;
use std::thread;
use std::time::Duration;
use rust_server::ThreadPool;

fn main() {
  let listenner = TcpListener::bind("127.0.0.1:7777").unwrap();

  for stream in listenner.incoming() {
    let stream = stream.unwrap();
    let pool = ThreadPool::new(4);

    pool.execute(|| {
      handle_connection(stream);
    })
  }
}

fn handle_connection(mut stream: TcpStream) {
  let mut buffer = [0; 1024];
  stream.read(&mut buffer).unwrap();

  let get = b"GET / HTTP/1.1\r\n";
  let sleep = b"GET /sleep HTTP/1.1\r\n";
  let css = b"GET /apple.css HTTP/1.1\r\n";
  let js = b"GET /apple.js HTTP/1.1\r\n";
  
  let (status_line, filename) = if buffer.starts_with(get) {
    ("HTTP/1.1 200 OK", "apple.html")
  } else if buffer.starts_with(sleep) {
    thread::sleep(Duration::from_secs(10));
    ("HTTP/1.1 200 OK", "apple.html")
  } else if buffer.starts_with(css) {
    ("HTTP/1.1 200 OK", "apple.css")
  } else if buffer.starts_with(js) {
    ("HTTP/1.1 200 OK", "apple.js")
  } else {
    ("HTTP/1.1 404 NOT FOUND", "404.html")
  };

  let contents = fs::read_to_string(filename).unwrap();

  let response = format!(
    "{}\r\nContent-Length: {}\r\n\r\n{}",
    status_line,
    contents.len(),
    contents
  );

  stream.write(response.as_bytes()).unwrap();
  stream.flush().unwrap(); 
}
