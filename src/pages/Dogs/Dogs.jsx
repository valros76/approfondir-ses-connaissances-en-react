import {Section, SearchBar, Card} from "@/components";
import "./Dogs.css";

const Dogs = () => {
  return(
    <Section
      sectionTitle="DogsForEver 🐶"
    >
      <SearchBar/>
      <Card props={{
        title: "Lola 🐩",
        description: "Jack Russel Terrier",
        avatarUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "2.5km",
        isLikeable: true,
        isLiked: false
      }}/>

      <Card props={{
        title: "Bailey 🐕",
        description: "Labrador Retriever",
        avatarUrl: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        location: "3.5km",
        isLikeable: true,
        isLiked: false
      }}/>
    </Section>
  );
}

export default Dogs;