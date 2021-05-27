import React, { Fragment } from 'react'
import { Route } from 'react-router'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

export default function HomeTemplate(props) {
    return (
        <Fragment>
            <Route path={props.path} exact={(propsRoute) => {
                return (
                    <Fragment>
                        <Header {...propsRoute}></Header>
                        <props.component {...propsRoute}></props.component>
                        <Footer {...propsRoute}></Footer>
                    </Fragment>
                )
            }}>

            </Route>

        </Fragment>

    )
}
