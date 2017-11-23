import React , {Component} from 'react'

function withRedBorder(Cmp) {
    class NewCmp extends Component {
      render () {
        return (
            <div style={{border: '1px solid red', padding: 8}}>
                <Cmp {...this.props}/>
            </div>
        )
      }
    }

    return NewCmp
}

@withRedBorder
export class Sample extends Component {
  render () {
    return (<div>Sample With Decorator</div>)
  }
}

Sample.propTypes = {}
