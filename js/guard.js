

window.addEventListener('load', async () => {
  const { data: { session } } = await supabase.auth.getSession()
  
  if (!session) {
    window.location.href = 'login.html'
  } else {
    displayUserInfo(session.user)
  }
})

async function displayUserInfo(user) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, avatar_url')
    .eq('id', user.id)
    .single()
  
  console.log('Connecté:', profile?.full_name || user.email)
}

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

window.getCurrentUser = getCurrentUser