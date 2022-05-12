import { Fragment } from "react";
import Link from 'next/Link';


function HomePage() {

    return( <Fragment>
        <h1 className="text-6xl font-bold text-green-600 underline">
            Le Club de Bridge de Sète
        </h1>
        <ul>
            <li>
                <Link href="news">
                    Les nouvelles du mois
                    </Link>
            </li>
            <li>
                <Link href="tournois">
                    Tournois
                </Link>
            </li>
            
        </ul>

        </Fragment> 
    )
    


}

export default HomePage;