const { createClient } = require('@supabase/supabase-js');

// TEMPORARY: Hardcode your Supabase credentials here
const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
exports.handler = async function(event, context) {
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Harmless query to keep DB awake
  let res = await supabase.from('cabins').select('id').limit(1);

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: res,
      message: 'Pinged Supabase!',
    }),
  };
};

