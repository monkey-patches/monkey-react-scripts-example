import React , {Component} from 'react'
import './sample.scss'

function withRedBorder(Cmp) {
    class NewCmp extends Component {
      render () {
        return (
            <div style={{border: '1px solid red', padding: 8}} className="red-bg">
                <Cmp {...this.props}/>
            </div>
        )
      }
    }

    return NewCmp
}

@withRedBorder
class Sample extends Component {
  render () {
    return (<div>Sample With Decorator</div>)
  }
}

Sample.propTypes = {}

export {Sample}