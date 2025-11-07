import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the ALX Listing App</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Cozy Apartment"
          description="A beautiful place to stay for your vacation."
          image="/assets/house1.jpg"
        />
        <Card
          title="Beach House"
          description="Enjoy the ocean breeze and sunsets."
          image="/assets/house2.jpg"
        />
        <Card
          title="Mountain Cabin"
          description="Relax in a quiet, scenic environment."
          image="/assets/house3.jpg"
        />
      </div>

      <div className="flex justify-center mt-8">
        <Button label="View More Listings" onClick={() => alert('Loading more listings...')} />
      </div>
    </div>
  );
}
