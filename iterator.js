function iterator (object, handler) {

	if (typeof (handler) != "function")
		return "Handler must be callback type function.";

	switch (object.constructor.name)
	{
		case "Array":
			for (var itemIndex = 0, numberOfItems = object.length; itemIndex < numberOfItems; ++i)
			{
				handler(object[itemIndex]);
			}
		break;

		case "Object":
			for (var key in object)
			{
				handler(object[key]);
			}
		break;
	}
}

