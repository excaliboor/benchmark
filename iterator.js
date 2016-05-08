function iterator (object, handler) {

	if (typeof (handler) != "function")
		return "Handler must be callback type function.";

	switch (object.constructor.name)
	{
		case "Array":
			object.forEach(handler);
		break;

		case "Object":
			for (var key in object)
			{
				handler(object[key]);
			}
		break;
	}
}

