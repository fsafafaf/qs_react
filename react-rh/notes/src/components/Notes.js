import React, { Component } from 'react';

class Notes extends Component {
    //v-if v-for ...
    state = {
        entities: []
    }
    render() {
        // 模板逻辑 用变量去做
        // react 独有的html模板变量 JSX
        const entities = this.state.entities
        const noteItems = entities.map((entity) => {
            return (<div>一条项目</div>)
        })
        return (
            <div className="ui container notes"> 
                <h4 className="ui horizontal divider header"> 
                    <i className="paw icon"></i>
                    Notes App _ React.js
                </h4>
                <button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
                <div className="ui divided items">
                    { noteItems }
                    { !entities.length && 
                        <span className="ui small disabled header">
                            还没有笔记，请按下'添加笔记'按钮
                        </span>
                    }
                </div>
            </div>
        )
    }
    createEntity() {
        console.log('点一下')
    }
}
export default Notes;