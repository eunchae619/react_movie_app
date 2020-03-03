import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location,location:{state:{poster,title,year,genres,index,summary}}} = this.props;
        if(location.state) {
            return(
                <div className="detail__container">
                    <div className="bigImg"><img src={poster} alt={title} title={title}></img></div>
                    <div >
                        <h3>{title}</h3>
                        <h5 >{year}</h5>
                        <ul>
                            {genres.map((genre,index) => 
                                <li key={index}>{genre}</li>
                            )}
                        </ul>
                        <p>{summary.slice(0,120)}...</p>
                    </div>
                </div>
            )
        }else {
            return null;
        }
        
    }
}

export default Detail;