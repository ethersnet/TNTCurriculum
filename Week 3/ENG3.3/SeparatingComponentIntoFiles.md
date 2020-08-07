# Example Solution

If you want to separate the component out into it's own file you'll need something like this:

**MyPersona.tsx**:
```
	import React from 'react';
	import { Component } from 'react';
	import { Persona, IPersonaProps } from "@fluentui/react"

	export default class MyPersona extends Component<IPersonaProps> {
		render() {
			return (
				<div id="persona-container">
					<Persona
						imageUrl={this.props.imageUrl}
						text={this.props.text}
						secondaryText={this.props.secondaryText}
					/>
				</div>
			);
		}
	}
```

**App.tsx**:

```
	import React from 'react';
	import MyPersona from "./MyPersona";
	
	class App extends React.Component {

		public render() {
		return (
			<div className="App">
			<h1>Hello Component Library!</h1>
			<div style={{ backgroundColor: "yellow" }}> {/* Div is here only to highlight where the component starts/ends*/}
				<MyPersona
				text="Text"
				secondaryText="Secondary Text"
				imageUrl="https://th.bing.com/th/id/OIP.x8Jwnqge_gR1-412yihxJQHaHa?w=177&h=173&c=7&o=5&dpr=1.25&pid=1.7"
				/>
			</div>
			</div >
		);
		}
	}
export default App;
```