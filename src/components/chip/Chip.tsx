import "./chip.scss"

//function MyButton({ title, color, onClick }: { title: string; color: string; onClick: () => void }) {
  // Le reste du code de ta boîte magique...



function Chip ({ title }: { title: string }) {
  return (
    <div>
      <div className="chip">{title}</div>
    </div>
  );
};

export default Chip;