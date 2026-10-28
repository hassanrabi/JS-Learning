const users = [
  { id: 101, username: "alex_g", followers: 15000, posts: 120, status: "active", verified: true },
  { id: 102, username: "sam_dev", followers: 850, posts: 12, status: "inactive", verified: false },
  { id: 103, username: "travel_bug", followers: 45000, posts: 450, status: "active", verified: true },
  { id: 104, username: "chef_maria", followers: 3200, posts: 85, status: "active", verified: false },
  { id: 105, username: "tech_trends", followers: 110000, posts: 1500, status: "active", verified: true },
  { id: 106, username: "ghost_user", followers: 5, posts: 0, status: "suspended", verified: false }
];

// 1. Filtering Small Creators
const getMicroCreators = userArray => 
    userArray.filter(user => user.followers >= 1000 && user.followers <= 20000);

// 2. Calculating Average Posts in Array
const calculateAveragePosts = userArray => 
    userArray.length === 0 ? 0 : userArray.reduce((sum, user) => sum + user.posts, 0) / userArray.length;

// 3. Assigning Tiers according to Followers (Fixed '=' to '>=')
const assignTier = userArray => userArray.map(user => ({
    ...user,
    tier: user.followers >= 100000 ? "Mega" : user.followers >= 10000 ? "Mid-Tier" : "Nano"
}));

// 4. Checking if Username is already taken (Fixed syntax bugs)
const isUsernameTaken = (userArray, targetName) =>
    userArray.some(user => 
        user.username.toLowerCase() === targetName.toLowerCase()
    );

// 5. Generate User Badge (Removed stray hyphen)
const displayProfile = userArray => {
    userArray.forEach(user => {
        const badge = user.verified ? "[✓]" : "";
        console.log(`${user.username} ${badge} - Status: ${user.status} (${user.followers} followers)`);
    });
};
// --- TEST RUN ---

console.log("=== 1. Testing displayProfile ===");
displayProfile(users);

console.log("\n=== 2. Testing getMicroCreators ===");
console.log(getMicroCreators(users));

console.log("\n=== 3. Testing calculateAveragePosts ===");
console.log(`Average posts: ${calculateAveragePosts(users).toFixed(1)}`);

console.log("\n=== 4. Testing assignTier ===");
console.log(assignTier(users));

console.log("\n=== 5. Testing isUsernameTaken ===");
console.log("Is 'sam_dev' taken?", isUsernameTaken(users, "sam_dev"));         // Should print: true
console.log("Is 'coding_ninja' taken?", isUsernameTaken(users, "coding_ninja")); // Should print: false