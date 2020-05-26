import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.items.map(item => {
            if (item.name === '') {
                item.name = 'Guys, i love React, but this bugs make me upset';
            }
            if (item.avatar === null) {
                item.avatar = "http://itstrana.vh118.hosterby.com/teleworking/media/files/Lan_pictures/images_6Kssevq.png";
            }
            return (
                <div className={'content-wrapper'}>
                    <div>
                        <p>{item.name}</p>
                    </div>
                    <img src={item.avatar}/>
                </div>
            )
        })
        return (
            <React.Fragment>
                {list}
            </React.Fragment>
        );
    }
}

export default Content;