import "./chip.scss"

//function MyButton({ title, color, onClick }: { title: string; color: string; onClick: () => void }) {
  // Le reste du code de ta boîte magique...



function Chip ({ name }: { name: string }) {
  return (
    <div>
      <div className="chip">{name}</div>
    </div>
  );
};

export default Chip;