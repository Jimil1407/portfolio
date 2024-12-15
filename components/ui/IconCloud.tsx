import IconCloud from "./icon-cloud";

export function IconCloudDemo() {
  const slugs = [
    "docker",
    "java",
    "tensorflow",
    "pytorch",
    "keras",
    "scikitlearn",
    "express",
    "nodedotjs",
    "mongodb",
    "c",
    "cplusplus",
    "python",
    "git",
    "kubernetes",
    "postgresql",
  ];

  return (
    <div className="relative flex size-full max-w-xl items-center justify-center overflow-hidden rounded-lg px-8 min-w-64 sm:pb-0 pb-4">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
