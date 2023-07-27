
import axios from 'axios';
import { getListCovid } from './service/covid';


export default function Home({data}) {
    return(
        <div>
            <table>
                <thead>
                    <tr>
              
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(covid => (
                        <tr key={covid.id}>
                            <td>{covid.confirmed}</td>
                            <td>{covid.deaths}</td>
                            <td>{covid.recovered}</td>
                            <td>{covid.active}</td>
                            <td>{covid.date}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export async function getStaticProps() {
   await getListCovid();
    return {
      props: {
         data
      },
    };
  }