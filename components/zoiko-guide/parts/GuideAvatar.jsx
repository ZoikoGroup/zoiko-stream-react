// The Guide's face: the ZoikoStream brand mark (public/zoiko-icon.png) in a round badge.
// Decorative — every place it appears already names Guide in text.
import Image from "next/image";

const ICON_SRC = "/zoiko-icon.png";

export default function GuideAvatar({ size = "md", online = false }) {
  const cls = size === "md" ? "zg-avatar" : `zg-avatar zg-avatar--${size}`;
  return (
    <span className={cls} aria-hidden="true">
      <Image src={ICON_SRC} alt="" width={64} height={64} />
      {online && <span className="zg-online" />}
    </span>
  );
}
