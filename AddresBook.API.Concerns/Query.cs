namespace AddressBook.Concerns
{
    public static class Query
    {
        
        public static readonly string CreateContact = $"INSERT INTO Contacts (Name, Email, Address, Mobile, Landline, Website) VALUES(@Name, @Email, @Address, @Mobile, @Landline, @Website); SELECT CAST(SCOPE_IDENTITY() AS INT)";

        public static readonly string UpdateContact = $"UPDATE Contacts SET Name = @Name, Email = @Email, Address = @Address, Mobile = @Mobile, Landline = @Landline, Website = @Website Where Id = @Id";

        public static readonly string DeleteContact = $"DELETE FROM Contcts WHERE Id = @Id";

    }
}
