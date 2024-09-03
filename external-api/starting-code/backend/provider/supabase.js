//iCSZnaN8YB9rb*h
//https://nburmjsmpmlnmugwdtcx.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5idXJtanNtcG1sbm11Z3dkdGN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4ODc4NTUsImV4cCI6MjAyNjQ2Mzg1NX0.vhmUqC4oQxXS-SgQdWZwD9s80_mP_CdMCTe6kC_4TRg
// Import `dotenv` package and call the `config()` function to access the environment variables set within the `.env` file.
require("dotenv").config();

// Abstract the `createClient` functionality from the `supabase` package.

const { createClient } = require("@supabase/supabase-js");

// Create two const variables `supabaseURL` and `supabaseSecret` with the value of the environment variables you created.
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecret = process.env.SUPABASE_SECRET;

// Create a variable `supabase` and set the value to the execution of the `createClient` function passing in `supabaseUrl` and `supabaseSecret` variables as arguments.

const supabase = createClient(supabaseUrl, supabaseSecret);

// Export the `supabase` variable.
module.exports = supabase;
