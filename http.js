/*!
 * http.js v1.0.14
 * (c) 2016 Cem Demir
 * Released under the MIT License.
 */

/*!
 * The http function supports any HTTP method. We'll focus on GET and POST example requests.
 */

function http(){
	//Initialize XMLHttp request function.
	this.request = new XMLHttpRequest();

	//Ready for result on onload event listener.
	this.result = function(callback){
		//Success
		this.request.onload = function() {
			if (this.status >= 200 && this.status < 400) {
				var data = JSON.parse(this.responseText);
				callback(data);
			}
		};

		//Error
		this.request.onerror = function() {
			callback(null);
		};
	}

	//Get function of http.
	this.get = function(url, callback){
		this.request.open('GET', url, true);
		this.request.send();
		this.result(callback);
	}

	//Post function of http.
	this.post = function(url, data, callback){
		this.request.open('POST', url, true);
		this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		this.request.send(JSON.stringify(data));
		this.result(callback);
	}
}

//Calling get by prototype.
//Example : http.get('URL', function(){});
http.prototype.get = function(url, callback) {
    return this.get(url, {}, callback);
};

//Calling post by prototype.
//Example : http.post('URL', {}, function(){});
http.prototype.post = function(url, data, callback) {
    return this.post(url, data, callback);
};

//Initialize
var http = new http();
