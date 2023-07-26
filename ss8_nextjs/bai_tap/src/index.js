
import axios from 'axios';


export default function Home({data}) {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
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
                            <td>{covid.id}</td>
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
    const response = await axios.get('http://localhost:8080/covids')
    const data = response.data 
    return {
      props: {
        data: {data}
      },
    };
  }