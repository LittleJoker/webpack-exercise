import { get } from 'lodash';

export default class B {
	init() {
		var object = { 'a': [{ 'b': { 'c': 3 } }] };

		console.log(get(object, 'a[0].b.c'));
		// => 3

		console.log(get(object, ['a', '0', 'b', 'c']));
		// => 3

		console.log(get(object, 'a.b.c', 'default'));
	}
}