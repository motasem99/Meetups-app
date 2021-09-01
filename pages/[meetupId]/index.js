import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  const { meetupData } = props;

  return (
    <MeetupDetail
      image='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'
      title='A first meetup'
      address='Palestine, Gaza'
      description='The meetup description'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
        id: meetupId,
        title: 'A first meetup',
        address: 'Palestine, Gaza',
        description: 'The meetup description',
      },
    },
  };
}

export default MeetupDetails;
