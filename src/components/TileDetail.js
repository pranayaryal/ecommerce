import React from 'react'

const TileDetail = props => {
    return (
        <div>
            <section>
                <div className="tile is-ancestor">
                    <div className="tile is-vertical">
                        <div className="tile is-parent">
                            <article className="tile is-child">
                                <p className="title">Wide tile</p>
                                <p className="subtitle">Aligned with the right tile</p>
                                <div className="content">
                                    <p>This is the content section</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default TileDetail;