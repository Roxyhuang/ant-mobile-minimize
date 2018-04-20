import React from 'react';
import CSSModules from 'react-css-modules';
import s from './list.less';

class ListC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  componentDidMount() {
    // TODO
  }

  render() {
    return (
      <div>
        <div styleName="listA listB listC">C</div>
      </div>

    );
  }
}

export default CSSModules(ListC, s, { allowMultiple: true });
