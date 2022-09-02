import './styles.css';
import DMLink from '../DMLink'

export interface DM {
  id: string;
  name: string;
  url: string;
}

const MyDMListings = () => {
  const dummyData: DM[] = [
    { id: '3939393', name: 'John', url: '' },
    { id: 'kdkdkfkaf', name: 'Mikey', url: '' },
    { id: '4lrlro4', name: 'Amaka', url: '' },
    { id: '02-22kdj', name: 'Veronica', url: '' },
  ];

  return (
    <section className="dm-listings">
      <input type="text" className="form-group__text-input dm-listings__search" />
      <div className="flex flex--column">
        <div>
          <h2 className="dm-listings__title">Direct Messages</h2>
        </div>

        <ul>
          { dummyData.map(dm => <DMLink dm={dm} />) }
        </ul>

      </div>
    </section>
  );
};

export default MyDMListings;
