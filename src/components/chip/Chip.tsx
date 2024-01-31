import "./chip.scss"

//function MyButton({ title, color, onClick }: { title: string; color: string; onClick: () => void }) {
  // Le reste du code de ta boîte magique...



function Chip ({ genre }: { genre: string }) {
  return (
    <div>
      <div className="chip">{genre}</div>
    </div>
  );
};

export default Chip;