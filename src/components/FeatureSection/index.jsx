import React from 'react'
import './style.css'

export default function FeatureSection({ imageFeature, altFeature, textFeature }) {
    return (
        <div className="feature">
                <img src={ imageFeature } alt={ altFeature } />
                <p>{ textFeature }</p>
            </div>
    )
}