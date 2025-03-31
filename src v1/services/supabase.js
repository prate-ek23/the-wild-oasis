import { createClient } from '@supabase/supabase-js';
// export const supabaseUrl = 'https://fkvqsjnnnkdxliirxntc.supabase.co';
export const supabaseUrl = 'https://jtnubvfbhmutssogvuju.supabase.co';

// older key
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdnFzam5ubmtkeGxpaXJ4bnRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NDgxNDksImV4cCI6MjA0ODUyNDE0OX0.SjPfr7QDcFt55FYCyqrbFnvuCM53HzPR3Vfhk9CEC0o';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnVidmZiaG11dHNzb2d2dWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MjkyODYsImV4cCI6MjA1ODMwNTI4Nn0.SW7sA8fEHorgioJwDL7l4EXGz-6ySxZAgt_hyOcTgx8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
