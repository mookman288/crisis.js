//Instantiation notice.
crisis.prototype.helloworld	=	"crisis.js successfully instantiated.";

//Automatically add a handler to watch all specified inputs. 
crisis.prototype.automatic	=	true;

//Which inputs should be watched. 
crisis.prototype.inputs		=	['input[type=text]', 'search', 'textarea'];

//The amount of time to wait before searching. 
crisis.prototype.waitTime	=	500;

//Store all nodes and their identifiers.
crisis.prototype.nodes		=	{};

//Store all compiled regex.
crisis.prototype.regex		=	{};
