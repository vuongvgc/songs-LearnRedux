import React from 'react';
import SongsList from './SongsList';
import SongDetail from './SongDetail';
const App = () => {
    //Return Action
    return(
        <div className="ui container grip">
            <div className="ui row">
                <div className="eight wide columns">
                    <SongsList />
                </div>
                <div className="eight wide columns">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}
export default App;