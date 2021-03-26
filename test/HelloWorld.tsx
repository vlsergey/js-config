import * as React from 'react';

interface IHelloContentProps {
	name: string;
}

export default class HelloContent extends React.Component<IHelloContentProps> {

  constructor( props: IHelloContentProps ) {
    super( props );
  }

  public shouldComponentUpdate() : boolean {
    return false;
  }

  public render() : React.ReactNode {
    return <div>Hello { this.props.name }!</div>;
  }
}
