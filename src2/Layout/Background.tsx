interface Props {
  images: string[];
}

const Background = ({ images }: Props) => (
  <img
    src={`/backgrounds/${images[Math.floor(Math.random() * images.length)]}.avif`}
    className="absolute inset-0 h-dvh w-dvw object-cover object-center"
    alt=""
  />
);

export default Background;
