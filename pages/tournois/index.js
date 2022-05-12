import { Fragment } from 'react';
import Link from 'next/Link';

function tournoisPage() {

    return <Fragment>
        <h1>The tournois Page</h1>
        <ul>
            <li>
                <Link href= "tournois/inscriptions">
                    On s inscrit ici
                </Link>
            </li>
            <li>
                <Link href= "tournois/resultats">
                    Les resultats sont ici
                </Link>
            </li>

        </ul>
        </Fragment>
}

export default tournoisPage;