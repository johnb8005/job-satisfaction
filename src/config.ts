export const version =
  import.meta.env.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = import.meta.env.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const title =
  import.meta.env.SNOWPACK_PUBLIC_TITLE || "Solve 2nd Degree Equation";
export const basename = import.meta.env.SNOWPACK_PUBLIC_URL;

const ghUrl = "https://github.com/johnb8005/solve-2nd-deg-equation";

export const github = { sha: `${ghUrl}/commit/${sha}`, url: ghUrl };
