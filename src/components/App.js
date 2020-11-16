import React from 'react';
import SongsList from './SongsList'
const App = () => {
    //Return Action
    return(
        <div className="ui container grip">
            <div className="eight wide columns">
                <div className="ui row">
                    <SongsList />
                </div>
            </div>
        </div>
    )
}
export default App;