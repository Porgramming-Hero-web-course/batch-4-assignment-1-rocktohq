interface Profile {
  name: string;
  age: number;
  email: string;
}

type PartialProfile = Partial<Profile>;

const updateProfile = (profile: Profile, partial: PartialProfile): Profile => {
  return { ...profile, ...partial };
};
