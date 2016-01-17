# http.js
HTTP.js can handle GET and POST requests on javascript. It makes easier parse and post JSON data. It is death simple javascript library. You can use it on some frameworks that doesn't support http functions. For example; vue.js, react.js

# Usage
The http function supports any HTTP method. We'll focus on GET and POST example requests.

## POST Method
```javascript
http.post('URL', {'foo' : 'bar'}, function(data){
	console.log(data);
});
```

## GET Method
```javascript
http.get('URL', function(data){
	console.log(data);
});
```

### Obtaining the Response URL
Due to limitations of XMLHttpRequest, the response.url value might not be reliable after HTTP redirects on older browsers.

## License

MIT
