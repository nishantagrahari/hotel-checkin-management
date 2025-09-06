const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event, context) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Harmless query to keep DB awake
  await supabase.from('cabins').select('id').limit(1);

  return {
    statusCode: 200,
    body: 'Pinged Supabase!',
  };
};

