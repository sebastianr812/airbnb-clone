import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavoriteClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoriteClientProps> = ({
    listings,
    currentUser
}) => {
    return (
        <Container>
            <Heading title="Favorites" subtitle="List of places you have favorited!" />
            <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {listings.map((listing) => (
                    <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
                ))}
            </div>
        </Container>
    );
}

export default FavoritesClient;