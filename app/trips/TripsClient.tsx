import { Container } from "postcss";
import { SafeReservation, SafeUser } from "../types";
import Heading from "../components/Heading";

interface TripsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;

}



const TripsClient: React.FC<TripsClientProps> = ({
    reservations,
    currentUser
}) => {
    return (
        <Container>
            <Heading title="Trips" subtitle="Where you've been and where you're going" />
        </Container>
    );
}

export default TripsClient;