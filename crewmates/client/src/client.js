import { createClient } from '@supabase/supabase-js'

const URL = 'https://rlrfbjczyhcmthytonhp.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscmZiamN6eWhjbXRoeXRvbmhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDUxNjIsImV4cCI6MjAyODUyMTE2Mn0.ufj4PLweVTL_bmTe56GNUCE8LnpZlftXEjG9GVsIMxM';

export const supabase = createClient(URL, API_KEY);