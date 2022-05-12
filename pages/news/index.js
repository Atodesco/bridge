import { Fragment } from 'react';
import Link from 'next/Link';

function NewsPage() {

    return <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href= "news/detail">
                    NextJS is A Great Framework
                </Link>
            </li>

        </ul>
        </Fragment>
}

export default NewsPage;