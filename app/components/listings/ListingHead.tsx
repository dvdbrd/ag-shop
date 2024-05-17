'use client';

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  id: string;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  id,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <img src={imageSrc} alt={title} />
      <p>ID: {id}</p>
    </div>
  );
};

export default ListingHead;