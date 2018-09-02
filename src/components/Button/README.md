# Button

This component renders an HTML `<button>` and passes along all props. 

## Example Usage

```jsx
import React from 'react';
import { Button } from 'rinse-react';

class MyClass extends React.Component {
	buttonClick() {
		console.log('Ack! You got me!');
	}

	render() {
		return (
			<section>
				<Button onClick={this.buttonClick}>
					Get me!
				</Button>
			</section>
		)
	}
}
```
