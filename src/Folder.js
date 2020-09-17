import React from 'react';

const Headers = ({ titles, currentTab, selectTab }) => {

    const handleClick = (e) => {
        const idx = parseInt(e.target.id, 10);
        selectTab(idx);
    }

    const tabs = titles.map((title, idx) => {
        return (
            <li key={idx} id={idx} onClick={handleClick} className="thingy tabs">
                {title}
            </li>
        );
      })

    return (
      <ul className='tab-header'>
        {tabs}
      </ul>
    );
}


class Folder extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            folders: props.folders,
            currentTab: 0

        };
    };


    selectTab = (idx) => {
        this.setState({currentTab: idx})
    }

    render() {
        const folder = this.props.folders[this.state.currentTab];
        let titles = this.props.folders.map(ele =>{
            return ele.title;
        });
        // console.log(titles)
        return (
            <div>
                <h1 className="tabs">Folder</h1>
                <div>
                    { /* do something */}

                    <Headers
                    titles={titles}
                    currentTab={this.state.currentTab}
                    selectTab={this.selectTab}
                    />
                    <div className="tabs">
                        {folder.content}
                    </div>
                </div>
            </div>
        )

    };

};

export default Folder;
