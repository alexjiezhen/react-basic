import React, { Component } from 'react';
import PosterList from '../../components/PosterList/PosterList'
import trendingNow from '../../assets/trending-now.json'
import Original from '../../assets/netflix-originals.json'
import withNameLogger from '../../components/withNameLogger/withNameLogger'
import magazines from '../../services/magazines'

export default class Home extends Component {
    render () {
        return (
            <div>
                <withNameLogger title='Magazines' load={magazines.getMagazines}/>
                <PosterList title='Trending Now' posters={trendingNow}/>
                <PosterList title='Originals' posters={Original}/>
            </div>
        )
    }
}