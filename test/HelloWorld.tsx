import React, {PureComponent} from 'react';

interface IHelloContentProps {
	name: string;
}

export default class HelloContent extends PureComponent<IHelloContentProps> {
  override render (): React.ReactNode {
    return <div>Hello { this.props.name }!</div>;
  }
}
